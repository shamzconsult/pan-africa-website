import { POST as contactHandler } from "./app/api/contact/route.ts"
import { POST as newsletterHandler } from "./app/api/newsletter/route.ts"
import { GET as mediaHandler } from "./app/api/media/route.ts"
import { NextRequest } from "next/server"

async function runTests() {
  console.log("=== RUNNING API ROUTE QUALITY ASSURANCE TESTS ===\n")
  let passed = 0
  let failed = 0

  // Helper to assert
  function assert(condition, testName, extra = "") {
    if (condition) {
      console.log(`[PASS] ${testName} ${extra}`)
      passed++
    } else {
      console.error(`[FAIL] ${testName} ${extra}`)
      failed++
    }
  }

  // --- CONTACT ROUTE TESTS ---
  console.log("--- 1. Testing Contact API Route (/api/contact) ---")

  // Test 1.1: Missing required fields
  {
    const req = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "Test User", email: "test@example.com" }), // missing message
    })
    const res = await contactHandler(req)
    const data = await res.json()
    assert(res.status === 400 && data.error === "Missing required fields", "Missing required field rejected with 400")
  }

  // Test 1.2: Invalid email address
  {
    const req = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "Test User", email: "not-an-email", message: "Hello world" }),
    })
    const res = await contactHandler(req)
    const data = await res.json()
    assert(res.status === 400 && data.error.includes("valid email"), "Invalid email rejected with 400")
  }

  // Test 1.3: Bot protection (honeypot field)
  {
    const req = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Spam Bot",
        email: "bot@spam.com",
        message: "Spam message",
        bot_field: "I am a bot",
      }),
    })
    const res = await contactHandler(req)
    const data = await res.json()
    assert(res.status === 200 && data.success === true, "Bot honeypot silently intercepted")
  }

  // Test 1.4: Proper submission without SMTP credentials
  {
    const req = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Engr. Musa Audu",
        email: "musa@example.org",
        phone: "+2348012345678",
        address: "Abuja, Nigeria",
        website: "https://example.org",
        message: "Enquiry regarding climate resilience pilot project collaboration in Abuja.",
      }),
    })
    const res = await contactHandler(req)
    const data = await res.json()
    // When SMTP is not configured or connection fails, returns 500 error gracefully without crashing
    assert(
      res.status === 500 && data.error.includes("Mail server connection failed"),
      "Graceful error handling when SMTP credentials are not yet configured"
    )
  }

  // --- NEWSLETTER ROUTE TESTS ---
  console.log("\n--- 2. Testing Newsletter API Route (/api/newsletter) ---")

  // Test 2.1: Missing email
  {
    const req = new Request("http://localhost:3000/api/newsletter", {
      method: "POST",
      body: JSON.stringify({}),
    })
    const res = await newsletterHandler(req)
    const data = await res.json()
    assert(res.status === 400 && data.error === "Valid email is required", "Missing newsletter email rejected with 400")
  }

  // Test 2.2: Invalid email format
  {
    const req = new Request("http://localhost:3000/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: "invalid-email" }),
    })
    const res = await newsletterHandler(req)
    const data = await res.json()
    assert(res.status === 400 && data.error.includes("valid email"), "Invalid newsletter email rejected with 400")
  }

  // Test 2.3: Valid subscription (handles DB / Mailchimp gracefully)
  {
    const req = new Request("http://localhost:3000/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: "subscriber@paccms-test.org" }),
    })
    const res = await newsletterHandler(req)
    const data = await res.json()
    assert(res.status === 200 && data.success === true, "Valid newsletter subscription processed with 200 success")
  }

  // --- MEDIA ROUTE TESTS ---
  console.log("\n--- 3. Testing Media API Route (/api/media) ---")
  {
    const req = new NextRequest("http://localhost:3000/api/media")
    const res = await mediaHandler(req)
    const data = await res.json()
    assert(res.status === 200 && data.success === true, "Media catalog returned with 200 success")
  }

  console.log(`\n==========================================`)
  console.log(`TEST SUMMARY: ${passed} Passed, ${failed} Failed`)
  console.log(`==========================================`)

  if (failed > 0) {
    process.exit(1)
  }
}

runTests().catch((err) => {
  console.error("Test execution error:", err)
  process.exit(1)
})
