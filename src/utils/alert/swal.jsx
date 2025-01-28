import Swal from 'sweetalert2';

export function Success(message) {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: message ? message : 'Success! Your action has been completed.',
    showCloseButton: true,
    showConfirmButton: false,
    timer: 2000,
    toast: true,
    background: 'green',
    color: "white",
  })
}

export function Error(message) {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: message ? message : 'Something went wrong.',
    showCloseButton: true,
    showConfirmButton: false,
    timer: 5000,
    toast: true,
    background: '#E23F33',
    color: "white",
    iconColor: "#E29F99"
  })
}