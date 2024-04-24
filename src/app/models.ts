export interface Plugin {
    group: string; // Calculated
    notes: string[]; // Calculated
    name: string
    version: string
    description: string
    success: string[]
    repo: string
    author: Author
    published: string
    versions: any[]
    keywords: string[]
    platforms: string[]
    fork: boolean
    forks: number
    watchers: number
    issues: number
    downloadPeriod: string
    downloadStart: string
    downloadEnd: string
    license: string
    fails: string[]
    runtime: string
    downloads: number
    bugs: string
    owner: Owner
    ghLicense: GhLicense
    stars: number
    image: string
    quality: number
    updated: string
}

export interface Author {
    name: string
}

export interface Owner {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
}

export interface GhLicense {
    key: string
    name: string
    spdx_id: string
    url: string
    node_id: string
}
