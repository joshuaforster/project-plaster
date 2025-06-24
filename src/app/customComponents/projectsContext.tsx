'use client'
import React, { createContext, useContext, ReactNode } from 'react';
import { projects } from '../Data/projectsData';

interface ProjectsProviderProps {
  children: ReactNode;
}

interface ProjectsContextProps {
  projects: typeof projects;
}

const ProjectsContext = createContext<ProjectsContextProps | undefined>(undefined);

export const ProjectsProvider: React.FC<ProjectsProviderProps> = ({ children }) => {
  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};