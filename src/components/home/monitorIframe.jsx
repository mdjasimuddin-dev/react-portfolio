const DesktopMockupPreview = ({ liveUrl, projectTitle }) => {
  const styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
      //   backgroundColor: "#0f172a",
    },
    monitorWrapper: {
      position: "relative",
      width: "100%",
      maxWidth: "900px",
    },
    monitorScreenBody: {
      background: "#1e293b",
      padding: "12px 6px 0 12px",
      borderRadius: "16px 16px 0 0",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 2px #334155",
    },
    browserHeader: {
      background: "#0f172a",
      padding: "5px 7px",
      display: "flex",
      alignItems: "center",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      marginBottom: "8px",
    },
    dots: {
      display: "flex",
      gap: "6px",
    },
    dotRed: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      backgroundColor: "#ef4444",
    },
    dotYellow: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      backgroundColor: "#f59e0b",
    },
    dotGreen: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      backgroundColor: "#10b981",
    },
    urlBar: {
      flexGrow: 1,
      marginLeft: "20px",
      marginRight: "10px",
      background: "#1e293b",
      padding: "2px 2px",
      borderRadius: "6px",
      color: "#94a3b8",
      fontSize: "6px",
      fontFamily: "monospace",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      border: "1px solid #334155",
    },
    iframeContainer: {
      width: "100%",
      height: "180px",
      background: "#ffffff",
      borderTopLeftRadius: "6px",
      borderTopRightRadius: "6px",
      overflow: "hidden",
    },
    iframe: {
      width: "1300px",
      height: "750px",
      border: "none",
      transform: "scale(0.25)",
      transformOrigin: "top left",
    },
    monitorChin: {
      height: "20px",
      // background: "#0f172a",
      background: "#1E293B",
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
    },
    appleLogo: {
      // color: "#64748b",
      color: "#ffffff",
      fontSize: "8px",
      fontWeight: "bold",
    },
    monitorStandNeck: {
      width: "50px",
      height: "30px",
      background: "linear-gradient(to bottom, #334155, #1e293b)",
      margin: "0 auto",
      clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
    },
    monitorStandBase: {
      width: "260px",
      height: "12px",
      background: "linear-gradient(to bottom, #475569, #334155)",
      margin: "0 auto",
      borderRadius: "6px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.monitorWrapper}>
        {/* মনিটর বডি */}
        <div style={styles.monitorScreenBody}>
          {/* ব্রাউজার স্টাইল হেডার ও ইউআরএল বার */}
          <div style={styles.browserHeader}>
            <div style={styles.dots}>
              <div style={styles.dotRed}></div>
              <div style={styles.dotYellow}></div>
              <div style={styles.dotGreen}></div>
            </div>
            <div style={styles.urlBar}>{liveUrl}</div>
          </div>

          {/* লাইভ ওয়েবসাইট প্রিভিউ (iframe) */}
          <div style={styles.iframeContainer}>
            <iframe
              src={liveUrl}
              title={projectTitle || "Desktop Project Preview"}
              style={styles.iframe}
            />
          </div>

          {/* মনিটরের নিচের চিন অংশ */}
          <div style={styles.monitorChin}>
            <span style={styles.appleLogo}>Md Jasim Uddin</span>
          </div>
        </div>

        {/* মনিটরের স্ট্যান্ড (নেক এবং বেজ) - ফিক্সড কোড */}
        <div style={styles.monitorStandNeck}></div>
        <div style={styles.monitorStandBase}></div>
      </div>
    </div>
  );
};

export default DesktopMockupPreview;
