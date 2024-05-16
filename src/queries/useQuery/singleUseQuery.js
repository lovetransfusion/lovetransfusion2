const singleUseQuery = ({ supabase, queryKey, table, column, columnValue }) => {
  return {
    queryKey: queryKey,
    queryFn: async () => {
      const { data, error } = await supabase
        .from(table)
        .select()
        .eq(column, columnValue)
      if (data) {
        return data
      } else {
        console.log('error', error)
      }
    },
    refetchInterval: 30 * 1000,
  }
}

export default singleUseQuery
