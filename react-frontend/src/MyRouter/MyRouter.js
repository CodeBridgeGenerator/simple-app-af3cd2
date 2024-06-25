import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';
// manage change
import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardPreLogin from '../components/Dashboard/DashboardPreLogin';
import ProjectLayout from '../components/Layouts/ProjectLayout';

import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import UserProjectLayoutPage from "../components/UsersPage/UserProjectLayoutPage";
import SingleCompaniesPage from '../components/CompaniesPage/SingleCompaniesPage';
import CompanyProjectLayoutPage from '../components/CompaniesPage/CompanyProjectLayoutPage';
import SingleBranchesPage from '../components/BranchesPage/SingleBranchesPage';
import BranchProjectLayoutPage from '../components/BranchesPage/BranchProjectLayoutPage';
import SingleDepartmentsPage from '../components/DepartmentsPage/SingleDepartmentsPage';
import DepartmentProjectLayoutPage from '../components/DepartmentsPage/DepartmentProjectLayoutPage';
import SingleSectionsPage from '../components/SectionsPage/SingleSectionsPage';
import SectionProjectLayoutPage from '../components/SectionsPage/SectionProjectLayoutPage';
import SingleRolesPage from '../components/RolesPage/SingleRolesPage';
import RoleProjectLayoutPage from '../components/RolesPage/RoleProjectLayoutPage';
import SinglePositionsPage from '../components/PositionsPage/SinglePositionsPage';
import PositionProjectLayoutPage from '../components/PositionsPage/PositionProjectLayoutPage';
import SingleTemplatesPage from '../components/TemplatesPage/SingleTemplatesPage';
import TemplateProjectLayoutPage from '../components/TemplatesPage/TemplateProjectLayoutPage';
import SingleMailsPage from '../components/MailsPage/SingleMailsPage';
import MailProjectLayoutPage from '../components/MailsPage/MailProjectLayoutPage';
import SingleTestsPage from '../components/TestsPage/SingleTestsPage';
import TestProjectLayoutPage from '../components/TestsPage/TestProjectLayoutPage';
import SingleUserAddressesPage from '../components/UserAddressesPage/SingleUserAddressesPage';
import UserAddressProjectLayoutPage from '../components/UserAddressesPage/UserAddressProjectLayoutPage';
import SingleCompanyAddressesPage from '../components/CompanyAddressesPage/SingleCompanyAddressesPage';
import CompanyAddressProjectLayoutPage from '../components/CompanyAddressesPage/CompanyAddressProjectLayoutPage';
import SingleCompanyPhonesPage from '../components/CompanyPhonesPage/SingleCompanyPhonesPage';
import CompanyPhoneProjectLayoutPage from '../components/CompanyPhonesPage/CompanyPhoneProjectLayoutPage';
import SingleUserPhonesPage from '../components/UserPhonesPage/SingleUserPhonesPage';
import UserPhoneProjectLayoutPage from '../components/UserPhonesPage/UserPhoneProjectLayoutPage';

import WhatToDoPage from '../components/WhatTodo';

// new imports
import SingleProductsPage from "../components/ProductsPage/SingleProductsPage";
import ProductProjectLayoutPage from "../components/ProductsPage/ProductProjectLayoutPage";
// ~cb-add-import~

const MyRouter = (props) => {
    return (
        <Routes>
            <Route path="" exact element={props.isLoggedIn ? <ProjectLayout /> : <DashboardPreLogin />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/project" exact element={<ProjectLayout />} />
                <Route path="/account" exact element={<Account />} />
                <Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
                <Route path="/users" exact element={<UserProjectLayoutPage />} />
                <Route path="/companies/:singleCompaniesId" exact element={<SingleCompaniesPage />} />
                <Route path="/branches/:singleBranchesId" exact element={<SingleBranchesPage />} />
                <Route path="/departments/:singleDepartmentsId" exact element={<SingleDepartmentsPage />} />
                <Route path="/sections/:singleSectionsId" exact element={<SingleSectionsPage />} />
                <Route path="/roles/:singleRolesId" exact element={<SingleRolesPage />} />
                <Route path="/positions/:singlePositionsId" exact element={<SinglePositionsPage />} />
                <Route path="/profiles/:singleProfilesId" exact element={<SingleProfilesPage />} />
                <Route path="/templates/:singleTemplatesId" exact element={<SingleTemplatesPage />} />
                <Route path="/mails/:singleMailsId" exact element={<SingleMailsPage />} />
                <Route path="/tests/:singleTestsId" exact element={<SingleTestsPage />} />
                <Route path="/permissionServices/:singlePermissionServicesId" exact element={<SinglePermissionServicesPage />} />
                <Route path="/permissionFields/:singlePermissionFieldsId" exact element={<SinglePermissionFieldsPage />} />
                <Route path="/userAddresses/:singleUserAddressesId" exact element={<SingleUserAddressesPage />} />
                <Route path="/companyAddresses/:singleCompanyAddressesId" exact element={<SingleCompanyAddressesPage />} />
                <Route path="/companyPhones/:singleCompanyPhonesId" exact element={<SingleCompanyPhonesPage />} />
                <Route path="/userPhones/:singleUserPhonesId" exact element={<SingleUserPhonesPage />} />

                <Route path="/companies" exact element={<CompanyProjectLayoutPage />} />
                <Route path="/branches" exact element={<BranchProjectLayoutPage />} />
                <Route path="/departments" exact element={<DepartmentProjectLayoutPage />} />
                <Route path="/sections" exact element={<SectionProjectLayoutPage />} />
                <Route path="/roles" exact element={<RoleProjectLayoutPage />} />
                <Route path="/positions" exact element={<PositionProjectLayoutPage />} />
                <Route path="/profiles" exact element={<ProfileProjectLayoutPage />} />
                <Route path="/templates" exact element={<TemplateProjectLayoutPage />} />
                <Route path="/mails" exact element={<MailProjectLayoutPage />} />
                <Route path="/tests" exact element={<TestProjectLayoutPage />} />
                <Route path="/permissionServices" exact element={<PermissionServiceProjectLayoutPage />} />
                <Route path="/permissionFields" exact element={<PermissionFieldProjectLayoutPage />} />
                <Route path="/userAddresses" exact element={<UserAddressProjectLayoutPage />} />
                <Route path="/companyAddresses" exact element={<CompanyAddressProjectLayoutPage />} />
                <Route path="/companyPhones" exact element={<CompanyPhoneProjectLayoutPage />} />
                <Route path="/userPhones" exact element={<UserPhoneProjectLayoutPage />} />
<Route path="/products/:singleProductsId" exact element={<SingleProductsPage />} />
<Route path="/products" exact element={<ProductProjectLayoutPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(MyRouter);
