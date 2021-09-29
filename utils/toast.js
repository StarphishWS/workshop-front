import { toast, snackbar }  from 'tailwind-toast'

export const showToast = (title, msg, color = 'bg-primary', duration = 3000) => {
    toast().success(title, msg).with({
        shape: 'pill',
        duration: duration,
        speed: 1000,
        positionX: 'center',
        positionY: 'bottom',
        color: color,
        fontColor: "gray",
        fontTone: 200
      }).show()
}