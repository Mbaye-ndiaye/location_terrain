import React,{useState} from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const SidebarComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className="flex">
    <Sidebar className='bg-slate-600 h-screen'>
      <Menu >
        <MenuItem icon={<FaHome />}>Accueil</MenuItem>
        <SubMenu label="Utilisateurs" icon={<FaUser />}>
          <MenuItem>Liste</MenuItem>
          <MenuItem>Ajouter</MenuItem>
        </SubMenu>
        <MenuItem icon={<FaCog />}>Paramètres</MenuItem>
      </Menu>
    </Sidebar>
     {/* Contenu principal */}
     <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">Bienvenue dans mon application React</h1>
        <p className="mt-4 text-gray-700">
          Ceci est la section dashboard. Ajoute ton contenu ici.
        </p>
        <p>{toggle}</p>
      </div>
        

    </div>
  );
};

export default SidebarComponent;
