export default function useDataDashboard() {
  let recentItems = [];
  let lowStockItems = [];

  const getRecentItems = (accumulator, item) => {
    const currentDate = new Date();
    const finalDate = new Date(item.createdAt);
    finalDate.setDate(finalDate.getDate() + 10);

    if (currentDate.getTime() <= finalDate.getTime()) {
      accumulator += 1;
    }
    return accumulator;
  };

  const getNameRecentItems = (items) => {
    items.forEach((item) => {
      const currentDate = new Date();
      const finalDate = new Date(item.createdAt);
      finalDate.setDate(finalDate.getDate() + 10);

      if (currentDate.getTime() <= finalDate.getTime()) {
        recentItems.push(item);
      }
    });

    return recentItems;
  };

  const getLowStockItems = (accumulator, item) => {
    if (item.amount < 10) {
      accumulator += 1;
    }
    return accumulator;
  };

  const getNameLowStockItems = (items) => {
    items.forEach((item) => {
      if (item.amount < 10) {
        lowStockItems.push(item);
      }
    });

    return lowStockItems;
  };

  return {
    getRecentItems,
    getNameRecentItems,
    getLowStockItems,
    getNameLowStockItems,
  };
}
