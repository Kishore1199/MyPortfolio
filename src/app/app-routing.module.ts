import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { HomeComponent } from './Components/home/home.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { EducationComponent } from './Components/education/education.component';
import { PersonalInfoComponent } from './Components/personal-info/personal-info.component';
import { ProofComponent } from './Components/proof/proof.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "education", component: EducationComponent },
  { path: "skills", component: SkillsComponent },
  { path: "personal", component: PersonalInfoComponent },
  { path: "proof", component: ProofComponent },
  { path: "contact", component: ContactComponent },
  { path: "all_in_one", component: MainpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
