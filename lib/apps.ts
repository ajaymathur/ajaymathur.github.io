import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface AppPlatform {
  name: string
  requirement: string
  url?: string
}

export interface AppMeta {
  slug: string
  name: string
  tagline: string
  platforms: AppPlatform[]
  contact: string
}

export interface AppPrivacyMeta {
  slug: string
  title: string
  updated: string
}

const appsDir = path.join(process.cwd(), 'apps')

function readAppMeta(slug: string): AppMeta {
  const raw = fs.readFileSync(path.join(appsDir, slug, 'index.mdx'), 'utf8')
  const { data } = matter(raw)
  return {
    slug,
    name: data.name as string,
    tagline: data.tagline as string,
    platforms: (data.platforms as AppPlatform[]) || [],
    contact: data.contact as string,
  }
}

export function getAllApps(): AppMeta[] {
  return fs
    .readdirSync(appsDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && fs.existsSync(path.join(appsDir, d.name, 'index.mdx')))
    .map(d => readAppMeta(d.name))
    .sort((a, b) => a.name.localeCompare(b.name))
}

export function getApp(slug: string): AppMeta {
  return readAppMeta(slug)
}

export function hasPrivacyPolicy(slug: string): boolean {
  return fs.existsSync(path.join(appsDir, slug, 'privacy.mdx'))
}

export function getAppPrivacy(slug: string): AppPrivacyMeta {
  const raw = fs.readFileSync(path.join(appsDir, slug, 'privacy.mdx'), 'utf8')
  const { data } = matter(raw)
  return {
    slug,
    title: data.title as string,
    updated: data.updated as string,
  }
}
