export interface ILink {
  id: number
  title: string
  url: any
  icon: string
}

export interface StrapiEvent {
  'title': string
  'description': string
  'date': Date
  'duration': number
  'price': number
  'image'?: any
  'total_seats': number
  'attendance': any[]
  'categories': any[]
  'external_url': string
  'public': boolean
}
