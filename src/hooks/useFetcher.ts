/* eslint-disable @typescript-eslint/no-explicit-any */
// Amacı verilen enpoint ve baseUrl göre fetch işlemleri yapmak
// verinin yüklenenme anını, loading anını, fetched, error anını yakalamak

import React, { useEffect } from 'react';

// Not: bu örnekde yazılan kodu tekrar amaçlı useReducer ile yapalım.
// Bu hook çağırılan yerlerde zaten veri çekme işlemi otomatik olarak bu hook üzerinden yürütülecek.
// her tarafta useEffect kullanmak da merkezi bir yönetimin önüne geçer, hata riski artar.
export function useFetcher<T>(baseUri: string, endpoint: string) {
	const [data, setData] = React.useState<T[]>([]);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState<any | null>(null);
	const [fetched, setFetched] = React.useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(`${baseUri}/${endpoint}`)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setLoading(false);
				setFetched(true);
			})
			.catch((err) => {
				setError(err);
			});
	}, [baseUri, endpoint]); // component doma mounted olduğunda, baseUri veya endpoint değişirse veriyi bir daha load et.

	const state = { data, loading, error, fetched };

	return state;
}
