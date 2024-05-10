const multipleUseQuery = ({ supabase, queryKey, table, select, limit }) => {
  return {
    queryKey: [queryKey],
    queryFn: async () => {
      const { data } = await supabase
        .from(table)
        .select(select)
        .limit(limit || '*')
      if (data) {
        return data
      }
    },
  }
}

export default multipleUseQuery
