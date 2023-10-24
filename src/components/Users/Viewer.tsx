import { FC } from 'react';
import Button from '../Button/Button';
import { IconType } from 'react-icons';

interface ViewerProps {
   onClick: () => void;
   label: string;
   icon: IconType;
}

const Viewer: FC<ViewerProps> = ({ label, onClick, icon }) => {
   return <Button label={label} onClick={onClick} icon={icon} size="sm" />;
};

export default Viewer;
