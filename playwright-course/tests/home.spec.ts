import { test, expect, type Page } from '@playwright/test';
test.describe('Home', () => {
    test('Open Home and Verify Title', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com/');
        // verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })
    test('Open about page and verify title', async ({ page }) => {
         // open url
         await page.goto('https://practice.sdetunicorns.com/about/');
         // verify title
         await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })
    test('Click on get started button using css selector', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com/');
        await expect(page).not.toHaveURL(/.*#get-started/)
        // vlick on the button
        await page.locator('#get-started').click();
        // verify url
        await expect(page).toHaveURL(/.*#get-started/)

    })
    test('Verify heading text is visible using text locator', async ({ page }) => {
        // open url
        await  page.goto('https://practice.sdetunicorns.com/')
        // use text locator for heading
        const headingText = page.locator('text = Think different. Make different.')
        //  check if it's visible
        await expect(headingText).not.toBeHidden()
        await expect(headingText).toBeVisible()
    })
    test('Verify home link is enabled using text and css selector', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com/');
        // find home text
        // first way
        const homeText = page.locator('#zak-primary-menu >> text=Home').first()// one way to combine text and css locator is to use >>
        // second way
        const HomeText = page.locator('#zak-primary-menu:has-text("Home")')// another way to combine text and css locator is to use :has-text()
        // verify home link  is enabled
        await expect(homeText).toBeEnabled()
        await expect(HomeText).toBeEnabled()

    })
    test('Verify search icon is visible using xpath locator', async ({ page }) => {
         // open url
         await page.goto('https://practice.sdetunicorns.com/');

        // find the search icon
         const searchIcon = page.locator('//header/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/*[1]')

        // verify search icon is visible
        await expect(searchIcon).toBeVisible();
    })
    test('Verify text of all navigation links', async ({ page }) => {
        // expected links to be visible
        const expectedlinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ]
        // open url
        await page.goto('https://practice.sdetunicorns.com/');
        // find the nav links
        const navLinks = page.locator('#zak-primary-menu li')
        // print out all the links
        for(const link of await navLinks.elementHandles()){
            console.log (await link.textContent())
        }
        // verify all the links are visible
        expect(await navLinks.allTextContents()).toEqual(expectedlinks)

        
    })
    
})



