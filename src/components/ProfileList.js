import React from 'react'
import Profile from './Profile'
import { profiles } from '../profile-data'


const ProfileList = () => {
  return (
		<div >
    {profiles.map((profile)=>{
      return (
				<Profile
					img={profile.img}
					name={profile.name}
					job={profile.job}
					company={profile.company}
					link={profile.link}
				/>
			)
    })}

		
		</div>
	)
}

export default ProfileList