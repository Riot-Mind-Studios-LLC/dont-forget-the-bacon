// import dependancies
import { Download, Share2, Mail } from "lucide-react";
// import components

const FeatureExportControls = ({ groceryList }) => {
  const listAsText = () => {
    return groceryList.map((item) => `- ${item.name}`).join("\n");
  }

  const handleDownload = () => {
    const blob = new Blob([listAsText()], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "grocery-list.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "My Grocery List",
        text: listAsText(),
      });
    }
  }

  const handleEmail = () => {
    const subject = encodeURIComponent("My Grocery List");
    const body = encodeURIComponent(listAsText());
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  return (
    <div className="flex gap-2 mt-4 py-4 border-t">

      <button
        onClick={handleDownload}
        className="flex items-center justify-center gap-1 flex-1 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        <Download size={16} />
        Download
      </button>

      {navigator.share && (
        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-1 flex-1 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <Share2 size={16} />
          Share
        </button>
      )}

      <button
        onClick={handleEmail}
        className="flex items-center justify-center gap-1 flex-1 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        <Mail size={16} />
        Email
      </button>
    </div>
  )
}

export default FeatureExportControls;