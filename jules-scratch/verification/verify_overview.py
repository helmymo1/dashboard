from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()
    page.goto("http://localhost:4200/")

    # Wait for the app to load, sidebar should be visible
    expect(page.locator("app-sidebar")).to_be_visible()

    # Click the overview link
    overview_link = page.get_by_role("link", name="Overview")
    overview_link.click()

    # Wait for navigation and content to load
    expect(page.locator("app-overview h3")).to_have_text("Number Of Students")
    page.wait_for_load_state('networkidle')

    page.screenshot(path="jules-scratch/verification/overview.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
