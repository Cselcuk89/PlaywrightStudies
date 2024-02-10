import { test, expect, type Page } from '@playwright/test';
test.describe('Blog', () => {
    test('Verify recent posts count and verify the length of each list item', async ({ page }) => {
        // open blog page
        await page.goto('https://practice.sdetunicorns.com/blog/')
        // get the recent post list items
        const recentPostList = page.locator('#recent-posts-3 ul li')
        //loop through the list and assert the char length > 10
        for(const post of await recentPostList.elementHandles()){
            expect((await post.textContent())?.trim().length).toBeGreaterThan(10)
        }
        // assert that total recent post is 5
        expect(await recentPostList.count()).toBe(5)
    })
    
})
