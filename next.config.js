/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['img.stadiumgoods.com', 'res.cloudinary.com'],
    },
}

module.exports = nextConfig
