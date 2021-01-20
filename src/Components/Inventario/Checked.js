import React from 'react'

export default function Checked(props) {
    let { valor } = props
    if (typeof (valor) !== "undefined" && valor === true) {
        return (
            <div className="w-8 h-8 grid justify-items-center ml-1 mr-1 mt-1">
                <svg className="mt-1 h-4/5 w-5" height="512pt" viewBox="0 0 512.00005 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                    <path d="m502.003906 256c0 135.863281-110.140625 246.003906-246.003906 246.003906s-246-110.140625-246-246.003906 110.136719-246 246-246 246.003906 110.136719 246.003906 246zm0 0" fill="#cbe558" /><path d="m341.667969 139.847656-119.167969 119.167969-52.164062-52.164063-56.570313 56.570313 52.164063 52.164063 56.570312 56.566406 175.734375-175.734375zm0 0" fill="#fff" /><path d="m222.5 382.152344c-2.652344 0-5.195312-1.054688-7.070312-2.929688l-108.734376-108.730468c-3.90625-3.90625-3.90625-10.238282 0-14.144532l56.566407-56.566406c3.90625-3.90625 10.238281-3.90625 14.144531 0l45.09375 45.09375 112.09375-112.097656c1.875-1.875 4.421875-2.929688 7.074219-2.929688 2.648437 0 5.195312 1.054688 7.070312 2.929688l56.566407 56.570312c3.90625 3.902344 3.90625 10.234375 0 14.140625l-175.734376 175.738281c-1.875 1.875-4.417968 2.925782-7.070312 2.925782zm-94.589844-118.730469 94.589844 94.589844 161.59375-161.59375-42.425781-42.429688-112.097657 112.097657c-3.90625 3.90625-10.238281 3.90625-14.140624 0l-45.09375-45.09375zm0 0" /><path d="m255.9375 512c-6.53125 0-13.070312-.25-19.621094-.75-60.835937-4.664062-118.132812-31.027344-161.335937-74.226562-48.351563-48.355469-74.980469-112.640626-74.980469-181.023438 0-68.378906 26.628906-132.667969 74.980469-181.019531 48.351562-48.351563 112.640625-74.980469 181.019531-74.980469 68.382812 0 132.667969 26.628906 181.023438 74.980469 43.199218 43.203125 69.5625 100.5 74.226562 161.335937 4.613281 60.175782-12.144531 120.15625-47.183594 168.898438-3.222656 4.484375-9.472656 5.503906-13.957031 2.28125s-5.503906-9.472656-2.28125-13.957032c67.726563-94.207031 57.234375-222.230468-24.949219-304.417968-92.015625-92.015625-241.738281-92.015625-333.753906 0-92.019531 92.019531-92.019531 241.738281 0 333.757812 82.183594 82.179688 210.210938 92.675782 304.417969 24.945313 4.484375-3.222657 10.730469-2.199219 13.957031 2.285156 3.222656 4.484375 2.199219 10.730469-2.285156 13.957031-43.4375 31.226563-95.804688 47.933594-149.277344 47.933594zm0 0" /><path d="m429.953125 439.953125c-2.632813 0-5.210937-1.070313-7.070313-2.929687-1.859374-1.863282-2.929687-4.441407-2.929687-7.070313 0-2.632813 1.070313-5.210937 2.929687-7.070313 1.859376-1.859374 4.4375-2.929687 7.070313-2.929687 2.628906 0 5.207031 1.070313 7.070313 2.929687 1.859374 1.859376 2.929687 4.4375 2.929687 7.070313 0 2.628906-1.070313 5.207031-2.929687 7.070313-1.863282 1.859374-4.441407 2.929687-7.070313 2.929687zm0 0" />
                </svg>
            </div>
        )
    } else {
        return (
            <div className="w-8 h-8 grid justify-items-center ml-1 mr-1 mt-1">
                <svg className="mt-1 h-4/5 w-5" height="512pt" viewBox="0 0 512.00005 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                    <path d="m502.003906 256c0 135.863281-110.140625 246.003906-246.003906 246.003906s-246-110.140625-246-246.003906 110.136719-246 246-246 246.003906 110.136719 246.003906 246zm0 0" fill="#ff6977" /><path d="m388.9375 179.632812-56.566406-56.566406-76.371094 76.367188-76.367188-76.367188-56.566406 56.566406 76.367188 76.367188-76.367188 76.371094 56.566406 56.566406 76.367188-76.367188 76.371094 76.367188 56.566406-56.566406-76.367188-76.371094zm0 0" fill="#fff" /><path d="m332.371094 398.9375c-2.5625 0-5.121094-.976562-7.074219-2.929688l-69.296875-69.296874-69.296875 69.296874c-3.902344 3.90625-10.234375 3.90625-14.140625 0l-56.570312-56.566406c-1.875-1.878906-2.929688-4.421875-2.929688-7.070312 0-2.652344 1.054688-5.195313 2.929688-7.074219l69.296874-69.296875-69.292968-69.296875c-3.90625-3.902344-3.90625-10.234375 0-14.140625l56.566406-56.570312c1.875-1.875 4.417969-2.929688 7.070312-2.929688 2.652344 0 5.195313 1.054688 7.070313 2.929688l69.296875 69.296874 69.296875-69.296874c1.875-1.875 4.417969-2.929688 7.070313-2.929688 2.652343 0 5.195312 1.054688 7.070312 2.929688l56.570312 56.570312c3.90625 3.902344 3.90625 10.234375 0 14.140625l-69.296874 69.296875 69.296874 69.296875c3.90625 3.90625 3.90625 10.238281 0 14.144531l-56.566406 56.566406c-1.953125 1.953126-4.511718 2.929688-7.070312 2.929688zm-76.371094-96.367188c2.558594 0 5.121094.976563 7.070312 2.929688l69.296876 69.296875 42.425781-42.425781-69.292969-69.296875c-3.90625-3.90625-3.90625-10.238281 0-14.144531l69.292969-69.296876-42.425781-42.425781-69.296876 69.296875c-1.875 1.875-4.417968 2.929688-7.070312 2.929688s-5.195312-1.054688-7.070312-2.929688l-69.296876-69.296875-42.425781 42.425781 69.296875 69.296876c1.875 1.875 2.929688 4.417968 2.929688 7.070312s-1.054688 5.195312-2.929688 7.070312l-69.296875 69.296876 42.425781 42.425781 69.296876-69.292969c1.953124-1.953125 4.511718-2.929688 7.070312-2.929688zm0 0" /><path d="m255.9375 512c-6.53125 0-13.070312-.25-19.621094-.753906-60.835937-4.660156-118.132812-31.023438-161.335937-74.226563-48.351563-48.351562-74.980469-112.636719-74.980469-181.019531 0-68.378906 26.628906-132.667969 74.980469-181.019531 48.351562-48.351563 112.640625-74.980469 181.019531-74.980469 68.382812 0 132.667969 26.628906 181.023438 74.980469 43.199218 43.199219 69.5625 100.5 74.226562 161.335937 4.613281 60.175782-12.144531 120.15625-47.183594 168.898438-3.222656 4.484375-9.472656 5.503906-13.957031 2.28125s-5.503906-9.472656-2.28125-13.957032c67.726563-94.207031 57.234375-222.234374-24.949219-304.417968-44.574218-44.574219-103.839844-69.121094-166.878906-69.121094s-122.300781 24.546875-166.875 69.125c-92.019531 92.015625-92.019531 241.734375 0 333.753906 82.183594 82.183594 210.207031 92.675782 304.414062 24.949219 4.488282-3.226563 10.734376-2.203125 13.957032 2.28125 3.226562 4.484375 2.203125 10.730469-2.28125 13.957031-43.433594 31.226563-95.804688 47.933594-149.277344 47.933594zm0 0" /><path d="m429.953125 439.953125c-2.632813 0-5.210937-1.070313-7.070313-2.933594-1.859374-1.859375-2.929687-4.4375-2.929687-7.066406 0-2.640625 1.070313-5.210937 2.929687-7.070313 1.859376-1.859374 4.429688-2.929687 7.070313-2.929687 2.628906 0 5.207031 1.066406 7.070313 2.929687 1.859374 1.859376 2.929687 4.429688 2.929687 7.070313 0 2.628906-1.070313 5.207031-2.929687 7.066406-1.863282 1.863281-4.441407 2.933594-7.070313 2.933594zm0 0" />
                </svg>
            </div>
        )
    }
}
