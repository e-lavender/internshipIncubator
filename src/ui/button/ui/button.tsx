import {clsx} from 'clsx'
import cls from '../styles/button.module.scss'
import {ComponentPropsWithoutRef, ElementType} from "react";
import {ButtonProps} from "@/ui/button/model/button-types";


export const Button = <T extends ElementType = 'button'>(
    props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
    const {onClickHandler, disabled, name, variant = 'primary', fullWidth,  as: Component = 'button', ...rest} = props
    const classNames = clsx(cls[variant], fullWidth && cls.fullWidth, )

    return <button  onClick={onClickHandler} disabled={disabled} className={classNames}>{name}</button>


}
