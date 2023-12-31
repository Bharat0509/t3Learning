import Image from "next/image";
import { VscAccount } from "react-icons/vsc";

interface ProfileImagesProps {
  src?: string | null;
  className?: string;
}
const ProfileImage: React.FC<ProfileImagesProps> = ({ src, className }) => {
  return (
    <div
      className={`${className} relative h-12 w-12 overflow-hidden rounded-full`}
    >
      {src == null ? (
        <>
          <VscAccount className="h-full w-full" />
        </>
      ) : (
        <Image src={src} alt="Profile Image" quality={100} fill />
      )}
    </div>
  );
};

export default ProfileImage;
