import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbautComponent } from './components/abaut/abaut.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "header", component: HeaderComponent },
  { path: "login", component: LoginComponent },
   { path: "experience", component: ExperienceComponent },
   { path: "education", component: EducationComponent },
   { path: "skills", component: SkillsComponent },
   { path: "projects", component: ProjectsComponent },
   { path: "contact", component: ContactComponent },
   { path: "abaut", component: AbautComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
