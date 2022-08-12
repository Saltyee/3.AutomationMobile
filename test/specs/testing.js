// const { get } = require('wd/lib/commands')
// const { isWebDriverException } = require('wd/lib/utils')
// const object = require('../../pageObject/object')
// const expect = require('chai').expect


// describe.only('Case 1 Open APP', () => {
//     it('Opening APP Kitalulus', async() => {
//         await driver.pause(5000)
//         await object.lanjutBtn.waitForDisplayed(10000) 
//         for(i=0; i<2; i++){
//             await object.lanjutBtn.click()
//         }  
//         await object.lewatiBtn.click()
//     })
//     it('Fill in Data Provinsi', async() => {
//         await driver.pause(5000)
//         await object.provinsiBtn.waitForDisplayed(10000) 
//         await object.provinsiBtn.click()
//         await object.dkiJakartaBtn.waitForDisplayed(10000) 
//         await object.dkiJakartaBtn.click()
        
//     })
//     it('Fill in Data Kabupaten', async() => {
//         await object.kabupatenBtn.waitForDisplayed(10000) 
//         await object.kabupatenBtn.click()
//         await object.jakartaSelatanBtn.click()
//         await object.nextBtn.click()
        
//     })
//     it('Lewati Guidelines', async() => {
//         await driver.pause(5000)
//         await driver.touchAction([
//             {action: 'press', x : 728, y : 1894},
//             'release',
//             {action: 'press', x : 732, y : 562},
//             'release',
//             {action: 'press', x : 863, y : 690},
//             'release',
//             {action: 'press', x : 725, y : 1404},
//             'release',
//             ])
//     })
//     it('Verify Footer Button on Homepage', async() => {
//         career = await object.karierBtn.getText()
//         expect(career).equal('Karier')
//         community = await object.komunitasBtn.getText()
//         expect(community).equal('Komunitas')
//         study = await object.BelajarBtn.getText()
//         expect(study).equal('Belajar')
//         account = await object.AkunBtn.getText()
//         expect(account).equal('Akun')
//     })
//     it('Click Footer Button on Homepage', async() => {
//         await object.komunitasBtn.click()
//         await object.BelajarBtn.click()
//         await object.AkunBtn.click()
//         await object.karierBtn.click()
//     })
// })
// describe('Case 2 Search Vacancy', () => {
//     it('Input Vacancy', async() => {
//         await object.searchLoker.waitForDisplayed(5000)
//         await object.searchLoker.click()

//         await object.inputLoker.addValue('Engineer')
//     })
//     it('Search Vacancy D3 Engineer', async() => {
//         await driver.pause(2000)
//         await object.d3Loker.click()
//         await driver.pause(2000)
//         await driver.touchAction([
//             {action: 'press', x : 683, y : 864},
//             'release'
//             ])
//         await driver.pause(2000)
//         await driver.back()
//         await driver.pause(2000)
//         await driver.touchAction([
//             {action: 'press', x : 683, y : 1125},
//             'release'
//             ])
//         await driver.pause(2000)
//         await driver.back()
//     })
//     it('Search Vacancy S1 Engineer', async() => {                
//         await driver.pause(2000)
//         await object.s1Loker.click()
//         await driver.pause(2000)
//         await driver.touchAction([
//             {action: 'press', x : 683, y : 864},
//             'release'
//             ])
//         await driver.pause(2000)
//         await driver.back()
//         await driver.pause(2000)
//         await driver.touchAction([
//             {action: 'press', x : 683, y : 1125},
//             'release'
//             ])
//         await driver.pause(2000)
//     })
//     it('Verify must login', async() => {                
//         await driver.pause(5000)
//         await object.lamarBtn.click()
//         await object.verifyLoginBtn.waitForDisplayed(2000)
//         await object.verifyLoginBtn.click()
//     })
//     it('Login account from google', async() => { 
//         await driver.pause(5000)
//         await driver.touchAction([
//             {action: 'press', x : 763, y : 1180},
//             'release'
//             ])              
//         // await object.loginEmail.click()
//         await object.mulaiUjianBtn.waitForDisplayed(2000)
//         await driver.back()
//     })
// })
// describe('Case 3 Save Vacancy', () => {
//     it('Verify User Already Login', async() => {
//         await driver.back()
//         await driver.back()
//         await driver.back()

//         await object.accountBtn.waitForDisplayed(5000)
//         await object.accountBtn.click()

//         loginAccount = await object.verifyAccount.getText()
//         expect(loginAccount).equal('Hai, Workspace Iqbalee')
//         console.log('Result = ', loginAccount)      
//     })
//     it('Bookmark Vacancy', async() => {
//         await object.karierBtn.click()
//         await object.semuaBtn.click()
//         await driver.pause(2000)
//         await driver.touchAction([
//             {action: 'press', x : 683, y : 864},
//             'release'
//             ])
//         await driver.pause(2000)
//         await object.bookmarkBtn.click()
//         await driver.back()
//         await driver.back()        
//     })
//     it('Verify Vacancy', async() => {
//         await driver.touchAction([
//             {action: 'press', x : 179, y : 393},
//             {action: 'moveTo', x : 183, y : 1990},
//             'release',
//             ])
//         await driver.pause(2000)
//         await object.checkBookmarkBtn.waitForDisplayed(2000)
//         await object.checkBookmarkBtn.click()  
//         Bookmark = await object.verifyBookmark.getText()
//         console.log('Result = ', Bookmark)

//     })
// })
