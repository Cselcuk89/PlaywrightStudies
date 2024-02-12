import { test, expect, type Page } from '@playwright/test';
// import homepage class
import HomePage from '../pages/home.page';
test.describe('Home', () => {
    // create homePage variable at a suite level
    let homePage:HomePage
    test('Open Home and Verify Title', async ({ page }) => {
        // create the object of homepage class and pass page instance in
        homePage = new HomePage(page)
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
        homePage = new HomePage(page)
        // open url
        await page.goto('https://practice.sdetunicorns.com/');
        await expect(page).not.toHaveURL(/.*#get-started/)
        // click on the button
        //await page.locator('#get-started').click();
        //await page.getByRole('link', { name: 'get started', exact: true }).click();
        //await page.getByText('get started').first().click();
        await homePage.getStartedBtn.click()
        
        // verify url
        await expect(page).toHaveURL(/.*#get-started/)

    })
    test('Verify heading text is visible using text locator', async ({ page }) => {
        homePage = new HomePage(page)
        await  page.goto('https://practice.sdetunicorns.com/')
        // use text locator for heading
        //const headingText = page.locator('text = Think different. Make different.')
        const headingText = await homePage.headingText
        //  check if it's visible
        await expect(headingText).not.toBeHidden()
        await expect(headingText).toBeVisible()
    })
    test('Verify home link is enabled using text and css selector', async ({ page }) => {
        homePage = new HomePage(page)
        // open url
        await page.goto('https://practice.sdetunicorns.com/');
        // find home text
        // first way
        //const homeText = page.locator('#zak-primary-menu >> text=Home').first()// one way to combine text and css locator is to use >>
        const homeText = await homePage.homeText
        // second way
        //const HomeText = page.locator('#zak-primary-menu:has-text("Home")')// another way to combine text and css locator is to use :has-text()
        const HomeText = await homePage.HomeText
        // verify home link  is enabled
        await expect(homeText).toBeEnabled()
        await expect(HomeText).toBeEnabled()

    })
    test('Verify search icon is visible using xpath locator', async ({ page }) => {
        homePage = new HomePage(page)
         // open url
         await page.goto('https://practice.sdetunicorns.com/');

        // find the search icon
         //const searchIcon = page.locator('//header/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/*[1]')
         const searchIcon = await homePage.searchIcon

        // verify search icon is visible
        await expect(searchIcon).toBeVisible();
    })
    test('Verify text of all navigation links', async ({ page }) => {
        homePage = new HomePage(page)
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
        //const navLinks = page.locator('#zak-primary-menu li')
        const navLinks = await homePage.navLinks
        // print out all the links
        for(const link of await navLinks.elementHandles()){
            console.log (await link.textContent())
        }
        // verify all the links are visible
        expect(await navLinks.allTextContents()).toEqual(expectedlinks)

        
    })
    
})



