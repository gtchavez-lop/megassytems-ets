// side menu transitions
export const Trans_SideMenu_Overlay = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: {
            ease: [0.2, 1, 0, 1],
            duration: 0.4
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: [1, 0, 0.8, 0],
            duration: 0.4
        }
    }
}
export const Trans_SideMenu_Content = {
    initial: {
        opacity: 0,
        x: -100,
    },
    open: {
        opacity: 1,
        x: 0,
        transition: {
            ease: [0.2, 1, 0, 1],
            duration: 0.4
        }
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            ease: [1, 0, 0.8, 0],
            duration: 0.4
        }
    }
}

// bottom menu transitions
export const Trans_BottomMenu_Overlay = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: {
            ease: [0.2, 1, 0, 1],
            duration: 0.4
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: [0.2, 1, 0, 1],
            duration: 0.4
        }
    }
}
export const Trans_BottomMenu_Content = {
    initial: {
        y: 100,
        opacity: 0,
    },
    open: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.2, 1, 0, 1],
            duration: 0.3
        }
    },
    exit: {
        y: 100,
        opacity: 0,
        transition: {
            ease: [0.2, 1, 0, 1],
            duration: 0.3
        }
    }
}


// page transitions
export const Trans_Page = {
    initial: {
        y: -10,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.2, 1, 0, 1],
            duration: 0.5
        }
    },
    exit: {
        y: 10,
        opacity: 0,
        transition: {
            ease: [1, 0, 0.8, 0],
            duration: 0.2
        }
    }
}

// tab transitions
export const Trans_Tab = {
    initial: {
        scaleY: 0.5,
        originY: 0,
        opacity: 0,
    },
    animate: {
        scaleY: 1,
        originY: 0,
        opacity: 1,
        transition: {
            ease: [0.2, 1, 0, 1],
            duration: 0.5
        }
    },
}