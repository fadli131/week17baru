import Swal from "sweetalert2"

export const API_BASE_URL = 'https://us-central1-revou-fullstack-2.cloudfunctions.net/fadliweek_17'

export const getHeaders = () => {
    const token = localStorage.getItem('token');
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    };

export const showAlert = (icon, title, html) => {
  Swal.fire({
      icon,
      title,
      html,
    });
   };

