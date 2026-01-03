/**
 * 商品一覧取得 API
 * @param token JWTトークン
 * @param page ページ番号（0始まり）
 * @param size 1ページあたりの件数
 */

export const getProducts = async (
  token: string,
  page: number = 0,
  size: number = 10
) => {
  const response = await fetch(`/api/product?page=$[page]&size=$[size]`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // 未認証
  if (response.status === 401) {
    return { status: 401 };
  }

  // その他エラー
  if (!response.ok) {
    throw new Error("商品一覧の取得に失敗しました");
  }

  // 正常時（JSON想定）
  return response.json();
};
