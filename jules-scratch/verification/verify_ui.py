from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to Overview page
    page.goto("http://localhost:4200/overview")
    page.screenshot(path="jules-scratch/verification/overview.png")

    # Navigate to Profile page
    page.goto("http://localhost:4200/profile")
    page.screenshot(path="jules-scratch/verification/profile.png")

    # Navigate to Withdraw page
    page.goto("http://localhost:4200/withdraw")
    page.screenshot(path="jules-scratch/verification/withdraw.png")

    # Open Commission Modal on Overview page
    page.goto("http://localhost:4200/overview")
    page.get_by_text("Commission per student").click()
    page.screenshot(path="jules-scratch/verification/commission-modal.png")

    # Open Discount Modal on Overview page
    page.goto("http://localhost:4200/overview")
    page.get_by_text("Student discount").click()
    page.screenshot(path="jules-scratch/verification/discount-modal.png")

    # Open Extend Barcode Modal on Profile page
    page.goto("http://localhost:4200/profile")
    page.get_by_text("Request").click()
    page.screenshot(path="jules-scratch/verification/extend-barcode-modal.png")

    # Open Withdrawal Submitted Modal on Withdraw page
    page.goto("http://localhost:4200/withdraw")
    page.get_by_text("Request").click()
    page.screenshot(path="jules-scratch/verification/withdrawal-submitted-modal.png")


    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
