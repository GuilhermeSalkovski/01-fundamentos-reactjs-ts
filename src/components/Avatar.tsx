import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;    // Optional parameters
}
export function Avatar({ hasBorder = true, ...props }: AvatarProps) { // (...props) rest operator: captura todos as
    // demais propriedades em um objeto props (uma vez que AvatarProps extende a interface ImgHTMLAttributes<>
    // todas as propriedades existentes para uma imagem no html são validas e capturadas )
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props} // (...props) spread operator: passa todas as propriedades passadas componente -> img
        />
    )
}