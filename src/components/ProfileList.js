import React from 'react'
import Profile from './Profile'
import { profiles } from '../profile-data'
import styles from './ProfileList.module.css'

const ProfileList = () => {
	return (
		<section>
			<div>
				<h1>Team Members</h1>
				<div className={styles['profile-container']}>
					{profiles.map((profile, index) => {
						const { img, name, job, company, link } = profile
						return (
							<Profile
								key={index}
								img={img}
								name={name}
								job={job}
								company={company}
								link={link}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default ProfileList
