import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/nav';
import LandingPage from './components/landing';
import ViewCohorts from './components/allcohorts';
import CohortIndividual from './components/singlecohort';
import NewCohort from './components/createcohort';
import ViewStudents from './components/allstudents';
import StudentIndividual from './components/singlestudent';
import NewStudent from './components/createstudent';
import EditGrade from './components/editgrade';
import ViewDegrees from './components/alldegrees';
import DegreeIndividual from './components/singledegree';
import NewDegree from './components/createdegree';
import ViewModules from './components/allmodules';
import ModuleIndividual from './components/singlemodule';
import NewModule from './components/createmodule';
import Footer from './components/footer';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
    <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/" element={LandingPage()} />
          <Route path="/degrees" element={ViewDegrees()} />
          <Route path="/cohorts" element={ViewCohorts()} />
          <Route path="/modules" element={ViewModules()} />
          <Route path="/students" element={ViewStudents()} />
          <Route path="/create-degree" element={NewDegree()} />
          <Route path="/create-cohort" element={NewCohort()} />
          <Route path="/create-module" element={NewModule()} />
          <Route path="/create-student" element={NewStudent()} />
          <Route path="/degrees/:id" element={<DegreeIndividual />} />
          <Route path="/cohorts/:id" element={<CohortIndividual />} />
          <Route path="/students/:id" element={<StudentIndividual />} />
          <Route path="/modules/:id" element={<ModuleIndividual />} />
          <Route path="/students/:id/edit" element={<EditGrade />} />
        </Routes>
      <Footer />
    </ThemeProvider>
    </Box>
  );
};

export default App;