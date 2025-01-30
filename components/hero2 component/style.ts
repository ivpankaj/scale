export const phoneInputStyles = `
  .phone-input-container .react-tel-input .form-control {
    width: 100%;
    height: 42px;
    font-size: 16px !important;
    background-color: transparent !important;
    border: 1px solid #ffffff;
    color: white;
    border-radius: 0.375rem;
    padding-left: 48px;
  }

  .phone-input-container .react-tel-input .flag-dropdown {
    background-color: transparent;
    border: none;
    border-right: 1px solid #ffffff;
  }

  .phone-input-container .react-tel-input .selected-flag:hover,
  .phone-input-container .react-tel-input .selected-flag:focus,
  .phone-input-container .react-tel-input .selected-flag.open {
    background-color: transparent;
  }

.phone-input-container .react-tel-input .country-list {
  background-color: #1a1a1a;
  color: white;
  border: 1px solid #333;
  font-size: 16px !important;
  max-height: 200px; /* Limit the height */
  overflow-y: auto; /* Enable vertical scrolling */
  position: absolute;
  z-index: 1000;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
}

  .phone-input-container .react-tel-input .country-list .country:hover {
    background-color: #333;
  }

  .phone-input-container .react-tel-input .country-list .country.highlight {
    background-color: #333;
  }

  .phone-input-container .react-tel-input .form-control:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ff9800;
    border-color: #ff9800;
  }

  .phone-input-container .react-tel-input .country-list .search {
    background-color: #1a1a1a;
    border: 1px solid #333;
  }

  .phone-input-container .react-tel-input .country-list .search-box {
    background-color: transparent;
    color: white;
    font-size: 16px !important;
  }

  .custom-country-list .react-tel-input .country-list {
    max-height: 200px;
    overflow-y: auto;
  }

`;
