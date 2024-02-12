import { Page,Locator } from "@playwright/test"}
class HomePage{
    page:Page
    getStartedBtn: Locator
    headingText: Locator
    hometext: Locator
    HomeText: Locator
    searchIcon:Locator
    navLinks:Locator
    // if you see red highlight when declaring web elements, hover over element and select " add all missing members"
    constructor(page: Page){
        this.page = page
        this.getStartedBtn = page.locator('#get-started')
        this.headingText = page.locator('text = Think different. Make different.')
        this.hometext = page.locator('#zak-primary-menu >> text=Home').first()
        this.HomeText = page.locator('#zak-primary-menu:has-text("Home")')
        this.searchIcon = page.locator('//header/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/*[1]')
        this.navLinks = page.locator('#zak-primary-menu li')



    }

}
export default HomePage