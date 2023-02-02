import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  AuthPage,
  notificationProvider,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/reset.css";

import { dataProvider, liveProvider } from "@pankod/refine-supabase";
import { AntdInferencer } from "@pankod/refine-inferencer/antd";
import routerProvider from "@pankod/refine-react-router-v6";
import { supabaseClient } from "utility";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";
import authProvider from "./authProvider";
import { TypeCreate, TypeEdit, TypeList, TypeShow } from "pages/types";
import { SpecialtyCreate, SpecialtyEdit, SpecialtyList, SpecialtyShow } from "pages/specialties";
import { VetCreate, VetEdit, VetList, VetShow } from "pages/vets";
import { OwnerCreate, OwnerEdit, OwnerList, OwnerShow } from "pages/owners";
import { VetSpecialtyCreate, VetSpecialtyEdit, VetSpecialtyList, VetSpecialtyShow } from "pages/vet_specialties";
import { VisitCreate, VisitEdit, VisitList, VisitShow } from "pages/visits";
import { PetCreate, PetEdit, PetList, PetShow } from "pages/pets";
import DashboardPage from "pages/dashboard";

function App() {
  return (
    <Refine
      dataProvider={dataProvider(supabaseClient)}
      liveProvider={liveProvider(supabaseClient)}
      authProvider={authProvider}
      routerProvider={{
        ...routerProvider,
        routes: [
          {
            path: "/register",
            element: <AuthPage type="register" />,
          },
          {
            path: "/forgot-password",
            element: <AuthPage type="forgotPassword" />,
          },
          {
            path: "/update-password",
            element: <AuthPage type="updatePassword" />,
          },
        ],
      }}
      LoginPage={() => (
        <AuthPage
          type="login"
        />
      )}
      notificationProvider={notificationProvider}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      resources={[
        {
            name: "types",
            list: TypeList,
            show: TypeShow,
            create: TypeCreate,
            edit: TypeEdit,
            canDelete: true,
        },
        {
          name: "specialties",
          list: SpecialtyList,
          show: SpecialtyShow,
          create: SpecialtyCreate,
          edit: SpecialtyEdit,
          canDelete: true,
        },
        {
          name: "vets",
          list: VetList,
          show: VetShow,
          create: VetCreate,
          edit: VetEdit,
          canDelete: true,
        },
        {
          name: "owners",
          list: OwnerList,
          show: OwnerShow,
          create: OwnerCreate,
          edit: OwnerEdit,
          canDelete: true,
        },
        {
          name: "vet_specialties",
          list: VetSpecialtyList,
          show: VetSpecialtyShow,
          create: VetSpecialtyCreate,
          edit: VetSpecialtyEdit,
          canDelete: true,
        },
        {
          name: "visits",
          list: VisitList,
          show: VisitShow,
          create: VisitCreate,
          edit: VisitEdit,
          canDelete: true,
        },
        {
          name: "pets",
          list: PetList,
          show: PetShow,
          create: PetCreate,
          edit: PetEdit,
          canDelete: true,
        },
      ]}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
      DashboardPage={DashboardPage}
    />
  );
}

export default App;
