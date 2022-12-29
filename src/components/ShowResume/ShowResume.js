import Modal from "../Modal";
import Templates from "../Templates";

export default ({ previewResume, closeModal, templateName, ...props }) => {
  if (!previewResume) return <></>;

  const Template = Templates[templateName];

  return (
    <Modal isOpen={previewResume} close={closeModal} showCloseBtn={true}>
      <Template {...props} />
    </Modal>
  );
};
