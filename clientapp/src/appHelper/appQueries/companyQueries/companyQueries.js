export const findCompaniesQuery = () => {
  return `query {
        findCompanies{
          id
          name
          logo
          branches{
            id
            location
            mobile
            googleLocation{
              coordinates
            }
          }
        }
      }`;
};

export const findCompanyQuery = (companyID) => {
  return `query {
        findCompany(companyID:"${companyID}"){
          id
          name
          logo
          branches{
            location
            mobile
            googleLocation{
              coordinates
            }
          }
        }
      }`;
};

export const createCompanyQuery = (objInput) => {
  return `mutation{
        createCompany(name:"${objInput.name}",logo:"${objInput.logo}"){
          id
          name
          logo
          branches{
            id
            location
            mobile
            googleLocation{
              type
              coordinates
            }
          }
        }
      }`;
};

export const updateCompanyQuery = (objInput) => {
  return `mutation{
        updateCompany(companyID:"${objInput.companyID}",name:"${objInput.name}",logo:"${objInput.logo}")
      }`;
};

export const deleteCompanyQuery = (companyID) => {
  return `mutation{
        deleteCompany(companyID:"${companyID}")
      }`;
};
