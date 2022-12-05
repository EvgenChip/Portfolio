type ProjectType = {
    id: number
    title: string
    description: string
    technologies: string
    toCode: string
    toViewing: string
    backgroundColor: string
}

type LinkType = {
    id: number
    title: string
    icon: string
    to: string
}

type CertificateType = Omit<LinkType, 'icon'>
