from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:8080"

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to root page
    page.goto(f"{BASE_URL}/")
    page.screenshot(path="jules-scratch/verification/root.png")
    print("Took screenshot of /")

    # Navigate to Overview page and reload
    page.goto(f"{BASE_URL}/overview")
    page.screenshot(path="jules-scratch/verification/overview.png")
    print("Took screenshot of /overview")
    page.reload()
    page.screenshot(path="jules-scratch/verification/overview_reloaded.png")
    print("Took screenshot of reloaded /overview")


    # Navigate to Profile page and reload
    page.goto(f"{BASE_URL}/profile")
    page.screenshot(path="jules-scratch/verification/profile.png")
    print("Took screenshot of /profile")
    page.reload()
    page.screenshot(path="jules-scratch/verification/profile_reloaded.png")
    print("Took screenshot of reloaded /profile")

    # Navigate to Withdraw page
    page.goto(f"{BASE_URL}/withdraw")
    page.screenshot(path="jules-scratch/verification/withdraw.png")
    print("Took screenshot of /withdraw")

    # Open Commission Modal on Overview page
    page.goto(f"{BASE_URL}/overview")
    page.get_by_text("Commission per student").click()
    page.screenshot(path="jules-scratch/verification/commission-modal.png")
    print("Took screenshot of commission modal")

    # Open Discount Modal on Overview page
    page.goto(f"{BASE_URL}/overview")
    page.get_by_text("Student discount").click()
    page.screenshot(path="jules-scratch/verification/discount-modal.png")
    print("Took screenshot of discount modal")

    # Open Extend Barcode Modal on Profile page
    page.goto(f"{BASE_URL}/profile")
    page.locator(".extend-barcode").get_by_text("Request").click()
    page.screenshot(path="jules-scratch/verification/extend-barcode-modal.png")
    print("Took screenshot of extend barcode modal")

    # Open Withdrawal Submitted Modal on Withdraw page
    page.goto(f"{BASE_URL}/withdraw")
    page.locator(".withdraw-request-section").get_by_role("button", name="Request").click()
    page.screenshot(path="jules-scratch/verification/withdrawal-submitted-modal.png")
    print("Took screenshot of withdrawal submitted modal")


    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
