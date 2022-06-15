import { gql } from '@apollo/client';

export interface LaunchInventory {
  id:string,
  mission_name:string,
  launch_date_local:string,
  launch_site:{
    site_name_long:string,
  }
  links:{
    article_link:string,
    video_link:string,
  }
  rocket:{
    rocket_name:string,
    rocket_type:string,
  }
  launch_success:boolean,
  details:string,
}

export interface PastLaunchData {
  launchesPast: LaunchInventory[];
}

export interface PastLaunchVars {
  limit: number;
  offset:number;
}

export const GET_PAST_LAUNCH = gql`
  query GetPastLaunch($limit: Int!,$offset: Int!) {
    launchesPast(limit: $limit,offset:$offset) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      launch_success
      details
    }
  }
`;