import {
  type ExperienceSchema,
  type EducationSchema,
  type UserSchema
} from '.';

interface ProfileSchema {
  user?: UserSchema
  company: string
  website: string
  location: string
  status: string
  skills: string[]
  bio: string
  profileImg: string
  githubusername: string
  experience?: ExperienceSchema[]
  education?: EducationSchema[]
  socialMedia: {
    youtube: string
    twitter: string
    facebook: string
    linkedin: string
    instagram: string
  }
}

export default ProfileSchema
