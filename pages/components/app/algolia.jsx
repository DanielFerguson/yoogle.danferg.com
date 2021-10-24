import { Highlight } from 'react-instantsearch-dom';

const SearchBox = ({ currentRefinement, refine }) => <input
    type="search"
    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
    value={currentRefinement}
    onChange={event => refine(event.currentTarget.value)}
/>;

const Hit = ({ hit }) => (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:px-6">
            <div className="flex gap-3">
                <img src={hit.channel_logo} alt={hit.channel_name} className="h-6 w-6 rounded-full" />
                <h3 className="text-lg leading-6 font-medium text-gray-900">{hit.channel_title}</h3>
            </div>
            <p className="mt-2 text-sm text-gray-500">
                <a href={hit.channel_href} className="hover:underline" target="_blank" rel="noopener noreferrer">View Channel</a>
                <a className="ml-3 hover:underline" href={hit.href + "&t=" + parseInt(hit.start)} target="_blank" rel="noopener noreferrer">View Video</a>
            </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><Highlight tagName="mark" hit={hit} attribute="text" /></dd>
                </div>
            </dl>
        </div>
    </div>
);

const RefinementListItem = ({ item, refine }) => (
    <div key={item.label} className="relative flex items-start py-2">
        <div className="min-w-0 flex-1 text-sm">
            <label className="font-medium text-gray-200 select-none">
                {item.label}
            </label>
        </div>
        <div className="ml-3 flex items-center h-5">
            <input
                id={`person-${item.label}`}
                name={`person-${item.label}`}
                type="checkbox"
                onClick={event => {
                    event.preventDefault();
                    refine(item.value);
                }}
                defaultChecked={item.isRefined}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
        </div>
    </div>
);

const RefinementList = ({ items, currentRefinement, refine }) => (
    <fieldset className="p-4">
        <legend className="text-lg font-medium text-gray-100">Channels</legend>
        <div>{items.map(item => (RefinementListItem({ item, refine })))}</div>
    </fieldset>
);

export { SearchBox, Hit, RefinementList }