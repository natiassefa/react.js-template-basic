import * as fs from 'fs'
import * as path from 'path'
import { createInterface } from 'readline'

interface BusinessInfo {
  appName: string
  name: string
  tagline: string
  description: string
  email: string
  phone: string
  website: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  social: {
    twitter?: string
    facebook?: string
    instagram?: string
    linkedin?: string
    github?: string
    youtube?: string
  }
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (query: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(query, resolve)
  })
}

const collectBusinessInfo = async (
  appName: string
): Promise<BusinessInfo | null> => {
  console.log('\n🚀 Welcome to the React Template Setup!')
  console.log("Let's personalize this template for your business.\n")

  // ask user if they want to use a file for bussiness info, skip the step or go through the steps
  const useFile = await question(
    'Do you want to use a file for business info? (y/n): '
  )
  if (useFile === 'y') {
    console.log(
      'please provide the path to the file: default-business-info.json'
    )
    const filePath = await question('Enter the path to the file: ')
    if (!fs.existsSync(filePath)) {
      console.error('File does not exist')
      process.exit(1)
    }
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const businessInfo = JSON.parse(fileContent)
    return businessInfo
  }

  const useSteps = await question(
    'Do you want to go through the steps? (y/n): '
  )
  if (useSteps === 'n') {
    console.log('Skipping the steps, leaving the template as is')
    return null
  }

  const businessName = await question('Business Name: ')
  const tagline = await question('Business Tagline: ')
  const description = await question('Business Description: ')
  const email = await question('Contact Email: ')
  const phone = await question('Phone Number: ')
  const website = await question('Website URL (optional): ')

  console.log('\n📍 Address Information:')
  const street = await question('Street Address: ')
  const city = await question('City: ')
  const state = await question('State/Province: ')
  const zipCode = await question('ZIP/Postal Code: ')
  const country = await question('Country: ')

  console.log('\n📱 Social Media (press Enter to skip):')
  const twitter = await question('Twitter URL: ')
  const facebook = await question('Facebook URL: ')
  const instagram = await question('Instagram URL: ')
  const linkedin = await question('LinkedIn URL: ')
  const github = await question('GitHub URL: ')
  const youtube = await question('YouTube URL: ')

  return {
    appName,
    name: businessName,
    tagline,
    description,
    email,
    phone,
    website,
    address: {
      street,
      city,
      state,
      zipCode,
      country
    },
    social: {
      twitter: twitter || undefined,
      facebook: facebook || undefined,
      instagram: instagram || undefined,
      linkedin: linkedin || undefined,
      github: github || undefined,
      youtube: youtube || undefined
    }
  }
}

const updatePackageJson = (businessInfo: BusinessInfo) => {
  const packagePath = path.join(process.cwd(), 'package.json')
  const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'))

  // Update package name to be URL-friendly
  const appName = businessInfo.appName.toLowerCase().replace(/[^a-z0-9]/g, '-')
  packageContent.name = appName
  packageContent.description = businessInfo.description
  packageContent.author = {
    name: appName,
    email: businessInfo.email || `${appName}@example.com`,
    url: businessInfo.website || `https://${appName}.com`
  }

  fs.writeFileSync(packagePath, JSON.stringify(packageContent, null, 2))
  console.log('✅ Updated package.json')
}

const updateContactConfig = (businessInfo: BusinessInfo) => {
  const contactPath = path.join(process.cwd(), 'src/config/contact.tsx')
  let contactContent = fs.readFileSync(contactPath, 'utf8')

  // Replace business information
  contactContent = contactContent.replace(
    /name: 'YourBrand'/g,
    `name: '${businessInfo.name}'`
  )
  contactContent = contactContent.replace(
    /tagline: 'Building the future, one product at a time'/g,
    `tagline: '${businessInfo.tagline}'`
  )
  contactContent = contactContent.replace(
    /description: 'We provide innovative solutions for modern businesses\.'/g,
    `description: '${businessInfo.description}'`
  )
  contactContent = contactContent.replace(
    /email: 'hello@yourbrand\.com'/g,
    `email: '${businessInfo.email}'`
  )
  contactContent = contactContent.replace(
    /phone: '\+1 \(555\) 123-4567'/g,
    `phone: '${businessInfo.phone}'`
  )
  contactContent = contactContent.replace(
    /supportEmail: 'support@yourbrand\.com'/g,
    `supportEmail: 'support@${businessInfo.email.split('@')[1]}'`
  )
  contactContent = contactContent.replace(
    /salesEmail: 'sales@yourbrand\.com'/g,
    `salesEmail: 'sales@${businessInfo.email.split('@')[1]}'`
  )

  // Update address
  contactContent = contactContent.replace(
    /street: '123 Business Street, Suite 100'/g,
    `street: '${businessInfo.address.street}'`
  )
  contactContent = contactContent.replace(
    /city: 'San Francisco'/g,
    `city: '${businessInfo.address.city}'`
  )
  contactContent = contactContent.replace(
    /state: 'CA'/g,
    `state: '${businessInfo.address.state}'`
  )
  contactContent = contactContent.replace(
    /zipCode: '94102'/g,
    `zipCode: '${businessInfo.address.zipCode}'`
  )
  contactContent = contactContent.replace(
    /country: 'United States'/g,
    `country: '${businessInfo.address.country}'`
  )

  // Update legal company name
  contactContent = contactContent.replace(
    /companyLegalName: 'YourBrand, Inc\.'/g,
    `companyLegalName: '${businessInfo.name}, Inc.'`
  )

  // Update social media URLs
  if (businessInfo.social.twitter) {
    contactContent = contactContent.replace(
      /twitter: 'https:\/\/twitter\.com\/yourbrand'/g,
      `twitter: '${businessInfo.social.twitter}'`
    )
  }
  if (businessInfo.social.facebook) {
    contactContent = contactContent.replace(
      /facebook: 'https:\/\/facebook\.com\/yourbrand'/g,
      `facebook: '${businessInfo.social.facebook}'`
    )
  }
  if (businessInfo.social.instagram) {
    contactContent = contactContent.replace(
      /instagram: 'https:\/\/instagram\.com\/yourbrand'/g,
      `instagram: '${businessInfo.social.instagram}'`
    )
  }
  if (businessInfo.social.linkedin) {
    contactContent = contactContent.replace(
      /linkedin: 'https:\/\/linkedin\.com\/company\/yourbrand'/g,
      `linkedin: '${businessInfo.social.linkedin}'`
    )
  }
  if (businessInfo.social.github) {
    contactContent = contactContent.replace(
      /github: 'https:\/\/github\.com\/yourbrand'/g,
      `github: '${businessInfo.social.github}'`
    )
  }
  if (businessInfo.social.youtube) {
    contactContent = contactContent.replace(
      /youtube: 'https:\/\/youtube\.com\/@yourbrand'/g,
      `youtube: '${businessInfo.social.youtube}'`
    )
  }

  fs.writeFileSync(contactPath, contactContent)
  console.log('✅ Updated contact configuration')
}

const updateIndexHtml = (businessInfo: BusinessInfo) => {
  const indexPath = path.join(process.cwd(), 'index.html')
  let htmlContent = fs.readFileSync(indexPath, 'utf8')

  // Update title and meta description
  htmlContent = htmlContent.replace(
    /<title>Business Template \| React \+ TypeScript \+ TailwindCSS<\/title>/g,
    `<title>${businessInfo.name} | ${businessInfo.tagline}</title>`
  )
  htmlContent = htmlContent.replace(
    /<meta name="description" content="Professional business website template built with React, TypeScript, and TailwindCSS" \/>/g,
    `<meta name="description" content="${businessInfo.description}" />`
  )

  fs.writeFileSync(indexPath, htmlContent)
  console.log('✅ Updated index.html')
}

const updateReadme = (businessInfo: BusinessInfo) => {
  const readmePath = path.join(process.cwd(), 'README.md')
  let readmeContent = fs.readFileSync(readmePath, 'utf8')

  // Update the main title
  readmeContent = readmeContent.replace(
    /# React\.js Template for Small Businesses/g,
    `# ${businessInfo.appName}`
  )

  // Update the description
  readmeContent = readmeContent.replace(
    /A production-ready React\.js template designed for small business websites\. Built with modern tools and optimized for SEO, mobile responsiveness, and easy customization\./g,
    businessInfo.description
  )

  fs.writeFileSync(readmePath, readmeContent)
  console.log('✅ Updated README.md')
}

const renameFiles = async (appName: string) => {
  try {
    const businessInfo = await collectBusinessInfo(appName)
    if (!businessInfo) {
      console.log('No business info provided')
      return
    }

    console.log('\n🔄 Updating files...')

    updatePackageJson(businessInfo)
    updateContactConfig(businessInfo)
    updateIndexHtml(businessInfo)
    updateReadme(businessInfo)

    console.log('\n🎉 Setup complete! Your template has been personalized.')
    console.log('\nNext steps:')
    console.log('1. Replace public/logo.svg with your business logo')
    console.log(
      '2. Add public/og-image.jpg (1200x630px) for social media previews'
    )
    console.log('3. Run "npm install" to install dependencies')
    console.log('4. Run "npm run dev" to start development server')
    console.log(`\nYour business: ${businessInfo.name}`)
    console.log(`Contact: ${businessInfo.email}`)
  } catch (error) {
    console.error('❌ Setup failed:', error)
  } finally {
    rl.close()
  }
}

const setup = () => {
  // set up script will help to personalize template for a new app

  console.log('Setting up the template...')
  // get app name from command line
  let appName = process.argv[2]
  if (!appName) {
    console.log('No app name provided, using default app name')
    appName = 'my-app'
  }
  console.log(`Setting up the template for ${appName}...`)
  // first rename all files with new values
  renameFiles(appName)
    .then(() => {
      console.log('Setup complete!')
    })
    .catch((error) => {
      console.error('Setup failed:', error)
    })
}

setup()
