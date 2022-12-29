export default {
  modal: {
    style: {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        paddingBottom: 30,
        overflow: "scroll",
      },
      overlay: {
        backgroundColor: "rgba(0,0,0, 0.4)",
        WebkitBackdropFilter: "blur(5px)",
        backdropFilter: "blur(5px)",
        zIndex: 100,
      },
    },
  },
  white: {
    style: { color: "white" },
  },
  container: {
    style: { display: "flex", justifyContent: "flex-end" },
  },
};
