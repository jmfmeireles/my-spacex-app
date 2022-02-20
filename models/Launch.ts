export interface LaunchBasicData {
  id: number;
  details: string | null;
  launch_date_local: string;
  mission_name: string;
}

export interface LaunchDetailedData extends LaunchBasicData {
  links: MissionLinks;
  ships: Ship[];
  rocket: Rocket;
  launch_site: LaunchSite;
}

export interface MissionLinks {
  video_link: string | null;
  article_link: string | null;
  mission_patch: string | null;
  flickr_images: string[];
}

export interface Ship {
  name: string;
  type: string;
  url: string;
}

export interface Rocket {
  rocket_name: string;
}

export interface LaunchSite {
  site_name: string;
}
