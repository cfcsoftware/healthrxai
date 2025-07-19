export const exportToCSV = (filename: string, headers: string[], rows: (string | number)[][]) => {
    const csvRows = [headers, ...rows];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvRows.map((e) => e.map((v) => `"${v}"`).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  export const exportToJSON = (filename: string, data: unknown) => {
    const dataStr =
      "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const link = document.createElement("a");
    link.setAttribute("href", dataStr);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  