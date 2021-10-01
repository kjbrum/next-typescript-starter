/**
 * Retrieve a key value from an object
 * @param {object} obj Object to get value from
 * @param {string} key Key to get value for
 * @returns {string}
 */
export const get = (obj: Record<string, any>, key: string): string | null => {
    var keys = key.split('.')

    for (var i = 0; i < keys.length; i++) {
        if (!obj.hasOwnProperty(keys[i])) {
            return null
        }
        return obj[keys[i]]
    }

    return null
}

/**
 * Remove/get margin values from className
 * @param {function} test Testing regex
 * @param {string} className String of classes to be parsed
 * @returns {string}
 */
export const getClasses =
    (test: (x: string) => boolean) =>
    (className: string): string => {
        return className
            ? className
                  .split(' ')
                  .filter(Boolean)
                  .filter(x => test(x.trim() || ''))
                  .join(' ')
            : ''
    }
const MRE: RegExp = /m[trblxy]?-/
export const getMargin = getClasses((k: string) => MRE.test(k))
export const omitMargin = getClasses((k: string) => !MRE.test(k))

/**
 * Convert a string to kebabcase
 * @param {string} str String to convert to kebabcase
 * @returns {string}
 */
export const toKebabCase = (str: string = ''): string => {
    const words = str
        .replace(/\'/g, '')
        .match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)

    return words
        ? words
              .filter(Boolean)
              .map(x => x.toLowerCase())
              .join('-')
        : ''
}

/**
 * Truncate a string, without cutting off words
 * @param {string} str String to be truncated
 * @param {number} max Maximum number of characters
 * @param {string} more String to append at the end of the truncated string
 * @returns {string}
 */

export const truncate = (
    str: string,
    max: number = 100,
    more: string = '...'
): string => {
    if (str.length <= max) return str

    let trimmedString = str.substr(0, max)

    // Re-trim to avoid word cutoff
    trimmedString = trimmedString.substr(
        0,
        Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
    )

    return `${trimmedString}${more}`
}

/**
 * Throttle a function for a set number of milliseconds
 * @param {function} func Function that will be throttled
 * @param {integer} delay Number of milliseconds to throttle running the function
 * @returns {void}
 */
export const throttle = (func: () => void, delay: number) => {
    let inProgress = false
    return (...args: []) => {
        if (inProgress) return
        inProgress = true

        setTimeout(() => {
            func(...args)
            inProgress = false
        }, delay)
    }
}

/**
 * Group an array of objects by a specified key
 * @param {array} items Array of objects
 * @param {string} key Key to use for grouping
 * @returns {object}
 */
export const groupByKey = (items: [], key: string): object => {
    return items.reduce(
        (result, item) => ({
            ...result,
            [item[key]]: [...(result[item[key]] || []), item],
        }),
        {}
    )
}

/**
 * Sort an object alphabetically by keys
 * @param {object} items Object to be sorted
 * @returns {object}
 */
export const sortByKeys = (items: Record<string, any>): object => {
    return Object.keys(items)
        .sort()
        .reduce((obj: Record<string, any>, key: string): object => {
            obj[key] = items[key]
            return obj
        }, {})
}

type ParsedVideoUrl = {
    type: string,
    url: string,
    id: string | null,
    allow: string,
}

/**
 * Parse YouTube or Vimeo URLs
 * - Supported YouTube URL formats:
 *   - http://www.youtube.com/watch?v=My2FRPA3Gf8
 *   - http://youtu.be/My2FRPA3Gf8
 *   - https://youtube.googleapis.com/v/My2FRPA3Gf8
 * - Supported Vimeo URL formats:
 *   - http://vimeo.com/25451551
 *   - http://player.vimeo.com/video/25451551
 * - Also supports relative URLs:
 *   - //player.vimeo.com/video/25451551
 * @param {string} url Video URL to be parsed
 * @returns {(ParsedVideoUrl | null)}
 */
export const parseVideoUrl = (url: string): ParsedVideoUrl | null => {
    const parts = url.match(
        /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
    )

    let type = 'other'
    let allow = ''
    if (parts) {
        if (parts[3].indexOf('youtu') > -1) {
            type = 'youtube'
            allow =
                'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        } else if (parts[3].indexOf('vimeo') > -1) {
            type = 'vimeo'
            allow = 'autoplay; fullscreen'
        }

        return {
            type,
            url,
            id: type === 'other' ? null : parts[6],
            allow,
        }
    }

    return null
}

/**
 * Creates an embed URL from a video URL
 * @param {string} url Video URL to be parsed
 * @returns {(string | null)}
 */
export const getVideoEmbed = (url: string): string | null => {
    const parsedVideo: ParsedVideoUrl | null = parseVideoUrl(url)

    if (!parsedVideo) return ''

    if (parsedVideo.type == 'youtube') {
        return '//www.youtube.com/embed/' + parsedVideo.id
    } else if (parsedVideo.type == 'vimeo') {
        return '//player.vimeo.com/video/' + parsedVideo.id
    }

    return parsedVideo.url
}

/**
 * Creates a thumbnail image from a video URL
 * @param {string} url Video URL to be parsed
 * @returns {(string | null)}
 */
export const getVideoThumbnail = (url: string): string | null => {
    const parsedVideo: ParsedVideoUrl | null = parseVideoUrl(url)
    let thumbUrl = ''

    if (!parsedVideo) return ''

    switch (parsedVideo.type) {
        case 'youtube':
            thumbUrl =
                '//img.youtube.com/vi/' + parsedVideo.id + '/maxresdefault.jpg'
            break
        case 'vimeo':
            thumbUrl = '//i.vimeocdn.com/video/' + parsedVideo.id + '_640.jpg'
            break
        default:
            break
    }

    return thumbUrl
}
