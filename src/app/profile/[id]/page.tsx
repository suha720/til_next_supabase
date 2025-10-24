interface ProfileDetailProps {
  params: {
    id: string;
  };
}

function ProfileDetail({ params }: ProfileDetailProps) {
  const { id } = params;
  return <div>page</div>;
}

export default ProfileDetail;
