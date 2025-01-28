
import Swal from 'sweetalert2';

const SwalDialog = ({ title = '', text = '', confirmButtonText = "Yes", cancelButtonText = "No" }) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-outline-success",
            cancelButton: "btn btn-outline-danger"
        },
        buttonsStyling: false
    });
    return swalWithBootstrapButtons.fire({
        title: title,
        text: text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        reverseButtons: true
    })
};

export default SwalDialog;

