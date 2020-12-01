import selfIntroductionComponent from './selfIntroduction'
import worksComponent from './works'
import contactComponent from './contact'
import careerComponent from './career'
import skillSetComponent from './skillset'

export enum MenuItemKey {
  SelfIntroduction = 'selfIntroduction',
  Works = 'works',
  SkillSet = 'skillSet',
  Contact = 'contact',
  Career = 'career',
}

export default {
  [MenuItemKey.SelfIntroduction]: selfIntroductionComponent,
  [MenuItemKey.Works]: worksComponent,
  [MenuItemKey.SkillSet]: skillSetComponent,
  [MenuItemKey.Contact]: contactComponent,
  [MenuItemKey.Career]: careerComponent,
}
